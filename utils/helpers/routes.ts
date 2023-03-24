interface RoutePaths {
  key: string

  [key: string]: any
}

type PathProps = keyof RoutePaths

const shouldOpenNewTab = (title: string): boolean => title.toLowerCase() === 'data products'

const simplifyPathRoute = (path: string): string => path.replace(/[/]+/g, '')
const getActiveRoute = (paths: RoutePaths[], pathsLinkProp: PathProps, activePath: string): string => {
  if (paths.length && activePath) {
    const simplifiedPaths = paths.map((p) => ({ ...p, [pathsLinkProp]: simplifyPathRoute(p[pathsLinkProp]) }))
    const simplifiedActivePath = simplifyPathRoute(activePath)

    const selectedPath = simplifiedPaths.find((sp) => sp[pathsLinkProp] === simplifiedActivePath)

    return selectedPath?.key ?? '0'
  }

  return '0'
}

export { shouldOpenNewTab, getActiveRoute, simplifyPathRoute }