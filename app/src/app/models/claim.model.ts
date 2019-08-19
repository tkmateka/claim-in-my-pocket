import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class claim {
  @JsonProperty('idNumber', Number, true)
  public idNumber: number = undefined;

  @JsonProperty('referenceNumber', Number, true)
  public referenceNumber: number = undefined;

  @JsonProperty('claimValue', String, true)
  public claimValue: string = undefined;

  @JsonProperty('claimComment', String, true)
  public claimComment: string = undefined;

}