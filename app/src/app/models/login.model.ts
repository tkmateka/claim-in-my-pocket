import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class login {
  @JsonProperty('idNumber', Number, true)
  public idNumber: number = undefined;

  @JsonProperty('password', String, true)
  public password: string = undefined;

}