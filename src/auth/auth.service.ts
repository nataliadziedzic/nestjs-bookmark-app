import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return { msg: 'Signed up  from service' };
  }

  signin() {
    return 'Signed in from service';
  }
}
