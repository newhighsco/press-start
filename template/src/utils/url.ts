import { urlJoin } from '@newhighsco/chipset'

import config from '~config'

const { url } = config

export const canonicalUrl = (path?: string) => urlJoin(url, path)
