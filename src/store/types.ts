import { IDashboardState } from './main/analysis/types'

export interface IRootState {
  name: string
  age: number
  entireDepartment: any[]
  entireRole: any[]
  entireMenu: any[]
}

export interface IRootWithModule {
  dashboard: IDashboardState
}

export type IStoreType = IRootState & IRootWithModule
