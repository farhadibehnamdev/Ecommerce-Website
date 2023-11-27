import { jwtDecode } from "jwt-decode";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// const getUserRole = async function (request: NextRequest) {
//   const token = request.cookies.get("access_token")?.value || "";
//   try {
//     const res = await fetch("http://localhost:8080/users/me", {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         Authorization: token,
//       },
//     });
//     if (res && res.status === 200) {
//       return res.json();
//     } else {
//       console.error("Request failed");
//     }
//   } catch (error) {
//     console.error('Request to "auth/me" failed', error);
//   }
// };
type sub = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  isEmailVerified: boolean;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
};
interface IUserToken {
  sub: sub;
}

const getToken = function (request: NextRequest) {
  return request.cookies.get("access_token")?.value || "";
};
export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath =
    path === "/auth/login" || path === "/auth/register" || path === "/";
  const token = getToken(request);
  if (isPublicPath && token && path !== "/") {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/auth/login", request.nextUrl));
  }

  if (!isPublicPath && token) {
    // const res: any = await getUserRole(request);
    const user = jwtDecode(token) as IUserToken;
    if (user.sub.role.toLowerCase() !== "admin") {
      return NextResponse.redirect(new URL("/", request.nextUrl));
    }
  }
}

export const config = {
  matcher: ["/", "/auth/login", "/auth/register", "/dashboard/:path*"],
};
