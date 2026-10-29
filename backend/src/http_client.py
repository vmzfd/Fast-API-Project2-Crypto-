from aiohttp import ClientSession
from async_lru import alru_cache

class HTTPClient:
    def __init__(self, base_url: str, api_key: str):
        # Сохраняем параметры, но не создаем сессию здесь
        self.base_url = base_url
        self.api_key = api_key
        self._session = None

    async def get_session(self) -> ClientSession:
        # Создаем сессию только если она еще не создана
        if self._session is None:
            self._session = ClientSession(
                base_url=self.base_url,
                headers={
                    "X-CMC_PRO_API_KEY": self.api_key,
                }
            )
        return self._session


class CMCHTTPClient(HTTPClient):
    @alru_cache
    async def get_listings(self):
        session = await self.get_session() # Получаем сессию асинхронно
        async with session.get("/v1/cryptocurrency/listings/latest") as resp:
            result = await resp.json()
            return result["data"]

    @alru_cache
    async def get_currency(self, currency_id: int):
        session = await self.get_session() # Получаем сессию асинхронно
        async with session.get(
            "/v2/cryptocurrency/quotes/latest",
            params={"id": currency_id}
        ) as resp:
            result = await resp.json()
            return result["data"][str(currency_id)]