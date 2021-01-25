interface IuseNodes {
  dataslug?: any
  dynamic?: boolean
  nthNode?: number
  innerNthNode?: number
  group?: boolean
}
export const useNodes = ({
  dataslug,
  dynamic,
  nthNode,
  innerNthNode,
  group,
}: IuseNodes) => {
  const nodes = dataslug.nodes[0]
  const translations = nodes.translations
  const transEN = translations.filter(
    (el: { language: { code: string } }) => el.language.code === 'EN'
  )
  const transDE = translations.filter(
    (el: { language: { code: string } }) => el.language.code === 'DE'
  )

  const titles = {
    pl: nodes.title,
    en: transEN[0]?.title,
    de: transDE[0]?.title,
  }
  const content = group
    ? {
        pl: dynamic
          ? nodes.blocks[nthNode ? nthNode : 0].innerBlocks[
              innerNthNode ? innerNthNode : 0
            ].dynamicContent
          : nodes.blocks[nthNode ? nthNode : 0].innerBlocks[
              innerNthNode ? innerNthNode : 0
            ].originalContent ??
            nodes.blocks[nthNode ? nthNode : 0].innerBlocks[
              innerNthNode ? innerNthNode : 0
            ].innerBlocks[0],
        en:
          transEN[0]?.blocks[nthNode ? nthNode : 0].innerBlocks[
            innerNthNode ? innerNthNode : 0
          ].originalContent ??
          transEN[0]?.blocks[nthNode ? nthNode : 0].innerBlocks[
            innerNthNode ? innerNthNode : 0
          ].innerBlocks[0],
        de:
          transDE[0]?.blocks[nthNode ? nthNode : 0].innerBlocks[
            innerNthNode ? innerNthNode : 0
          ].originalContent ??
          transDE[0]?.blocks[nthNode ? nthNode : 0].innerBlocks[
            innerNthNode ? innerNthNode : 0
          ].innerBlocks[0],
      }
    : {
        pl: dynamic
          ? nodes.blocks[nthNode ? nthNode : 0].dynamicContent
          : nodes.blocks[nthNode ? nthNode : 0].originalContent,
        en: transEN[0]?.blocks[nthNode ? nthNode : 0].originalContent,
        de: transDE[0]?.blocks[nthNode ? nthNode : 0].originalContent,
      }
  return {
    titles,
    content,
  }
}
