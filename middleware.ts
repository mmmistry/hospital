import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";
import { ROLE } from "./constants/Role";
// export {default} from 'next-auth/middleware'
/**
* TODO: enable below code when new route define for doctor.
*/

export default withAuth(function middleware(req:any) {
  if (req.nextUrl.pathname.startsWith("/doctor") && req.nextauth.token?.user?.roles !== ROLE.DOCTOR) {
    if(req.nextUrl.pathname.startsWith("/") && req.nextauth.token?.user?.roles === ROLE.DOCTOR){
      return NextResponse.redirect(new URL("/doctor", req.url));
    }
    return NextResponse.redirect(new URL("/", req.url));
  }
});

export const config = {
  matcher: [
    "/doctor/appointments",
    "/doctor/my-profile",
    "/doctor/reviews",
    "/home",
    "/my-profile",
    // "/doctor/:path*",
    // "/registration",
    // "/appoinments",
    // "/:path*",
  ],
}
