# Gallery Assets

歌推しアイコン特典ギャラリーに掲載する画像を置く場所です。

## File Name Rule

例:

- `2026-06_01.png`
- `2026-06_02.png`
- `2026-06_event-thanks.png`

## Recommended Size

- 正方形
- 1024 x 1024 px 推奨
- PNG または WebP

## How To Add

1. このフォルダに画像を入れる。
2. `../../gallery.html` の `galleryItems` に追加する。
3. スマホ表示と broken image がないことを確認する。

例:

```js
{
  image: "assets/gallery/2026-06_01.png",
  month: "2026.06",
  title: "歌推しアイコン特典",
  supporterName: "表示名",
  note: "掲載許可済み"
}
```

## Privacy

掲載前に、以下を確認してください。

- アイコン画像の掲載許可
- 表示名の掲載許可
- 外部リンクを載せる場合はリンク掲載許可

許可がない場合は、名前を出さないか、掲載しないでください。

## How To Remove

1. `../../gallery.html` の `galleryItems` から該当アイテムを削除する。
2. 公開から外す画像はすぐ消さず、必要なら非公開の保管場所へ移す。
3. 公開前に、削除した画像がページに残っていないことを確認する。

## Public Site Rule

ここはNico本人の公式サイト用ギャラリーです。
ココナラ、なないろ配信工房、主婦ラボの導線や説明は混ぜないでください。
