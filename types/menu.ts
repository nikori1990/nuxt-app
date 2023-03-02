export interface Menu {
  id?: string
  pid?: string
  name: string
  nameEn: string
  path: string
  icon?: string
  sort?: number
  children?: Menu[] | []
}
