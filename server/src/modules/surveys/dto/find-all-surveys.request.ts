export class FindAllSurveysRequest {
  substring?: string;
  authRequired?: boolean;
  userUuid?: string;
  fromStartTime?: Date;
  toStartTime?: Date;
  fromEndTime?: Date;
  toEndTime?: Date;
}
