import "server-only";
import {
  AuthTokensResponse,
  exchangeCodeForAccessToken,
  exchangeNpssoForCode,
  exchangeRefreshTokenForAuthTokens,
} from "psn-api";

 const getPlaystationToken = async (): Promise<AuthTokensResponse> => {
  const myNpsso = process.env.NPS_SSO!;
  const accessCode = await exchangeNpssoForCode(myNpsso);
  const authorization: AuthTokensResponse =
    await exchangeCodeForAccessToken(accessCode);

  const now = new Date();
  const expirationDate = new Date(
    now.getTime() + authorization.expiresIn * 1000
  );

  const isAccessTokenExpired = expirationDate.getTime() < now.getTime();

  if (isAccessTokenExpired) {
    return await exchangeRefreshTokenForAuthTokens(authorization.refreshToken);
  }

  return authorization;
};

export default getPlaystationToken;
