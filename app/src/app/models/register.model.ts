import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class register {
  @JsonProperty('name', String, true)
  public name: string = undefined;

  @JsonProperty('surname', String, true)
  public surname: string = undefined;

  @JsonProperty('email', String, true)
  public email: string = undefined;

  @JsonProperty('idNumber', Number, true)
  public idNumber: number = undefined;

  @JsonProperty('password', String, true)
  public password: string = undefined;

}