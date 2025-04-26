export type User = {
    _id: string
    name: string
    email: string
    avatar?: string | null
    createdAt: string
    email_verified_at?: null | string
    updatedAt: string
    role?:'user' | 'admin'
  }


export type GoogleCredentialResponse = {
  credential: string
  select_by?: string
  clientId?: string
}

export type Credentials = {
  email: string
  password: string
  remember?: boolean
}



  export type ExtendedUser = User & {
    orders?: OrderSummary[]
    address?: UserAddress
  }

  export type OrderSummary = {
    orderId: string
    total: number
    status: 'pending' | 'paid' | 'shipped' | 'cancelled'
    createdAt: string
  }

  export type UserAddress = {
    street: string
    city: string
    postalCode: string
    country: string
  }


  export type RegisterInput = {
    name: string
    email: string
    password: string
  }
