import { PageContainer as ThemedPageContainer } from '@newhighsco/chipset'
import { Meta } from '@newhighsco/press-start'
import type { NextSeoProps } from 'next-seo'
import React, { type FC, type PropsWithChildren } from 'react'

import Footer from '~components/Footer'
import Header from '~components/Header'

type Props = PropsWithChildren<{ meta: NextSeoProps }>

const PageContainer: FC<Props> = ({ meta, children }) => (
  <ThemedPageContainer header={<Header />} footer={<Footer />} gutter>
    <Meta {...meta} />
    {children}
  </ThemedPageContainer>
)

export default PageContainer
