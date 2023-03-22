export interface WorkingData{
    programName:string;
    programNumber:string;
    programBudget:number;
    programDescription:string;
    isActive:boolean;
    canDelete:boolean;
    isVirtual:boolean;
    programID:string;
}

export interface ApiDataType<programs> {
    success: boolean;
    message: string;
    programs: programs;
  }