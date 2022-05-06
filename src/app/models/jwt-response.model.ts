export interface JwtResponse {
  dataUser: {
    id: number,
    name: string,
    email: string,
    accessToken: string,
    spiresIn: string
  }
}