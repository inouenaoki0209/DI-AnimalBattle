export type itemType = {
  name: string,
  strong: number
}

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
