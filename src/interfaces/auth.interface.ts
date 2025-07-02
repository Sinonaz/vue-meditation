export interface AuthInterface {
  token: string
  user: {
    id: number
    email: string
    username: string
  }
}
