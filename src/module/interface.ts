import { EventName, inOBJType, unitType } from "./createTypes";
import * as fdsa from "./createTypes";

const setting: unitType.SettingType = "a";
const edit: fdsa.editType = '2'
export type itemType = {
  name: string,
  strong: number
}

window.addEventListener(EventName.LOAD,()=>{})
export interface ItemInterFace {
// プルダウンにデータをセットする
  set: (name: string) => void;
// プルダウン内のアイテム同士でバトル
  battle: () => string;
//  現在の状態を削除
  destroy: () => void;
  // アイテムデータを返す
  getAnimalData: () => itemType[];
}
