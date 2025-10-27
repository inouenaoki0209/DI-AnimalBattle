export namespace unitType {
  export type SettingType = "a" | "b" | "c";
}

export type editType = "1" | "2" | "3";

type someEvent = "click" | "load" | "mousedown"

export type inOBJType = {
  LOAD: someEvent,

}

export namespace EventName {
  export const LOAD: someEvent = "load";
}

