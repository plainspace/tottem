import { Box } from 'grommet'
import { NextSeo } from 'next-seo'
import * as React from 'react'
import styled from 'styled-components'
import { Section, useGetProfileQuery } from '../../generated/types'
import LoadingPage from '../UtilsPage/Loading'

const ContentBox = styled(Box)`
    margin-top: 40px;
    @media screen and (max-width: 812px) {
        margin-top: 8px;
        padding-right: 0px;
        padding-left: 0px;
    }
`

export const getDefaultSection = (
    sections: Array<Pick<Section, 'id' | 'slug' | 'name' | 'index'>>
) => {
    const minimumIndex = Math.min(...sections.map(x => x.index))
    const defaultSection = sections.find(x => x.index === minimumIndex)
    if (defaultSection === undefined) {
        throw Error('No default section')
    }
    return defaultSection
}

export interface IProfilePageProps {
    authUserId?: string
    activeSectionSlug?: string
    profile: string
}
export const Side = styled(Box)`
    width: 240px;
    height: 100%;
    flex-shrink: 6;
    visibility: hidden;
    @media screen and (max-width: 1024px) {
        display: none;
    }
`

export default (props: IProfilePageProps) => {
    const { loading, data } = useGetProfileQuery({
        variables: {
            slug: props.profile,
        },
    })

    if (loading || data === undefined || data === null) {
        return <LoadingPage />
    }
    const { user, sections } = data

    if (user === undefined || sections === undefined) {
        return <LoadingPage />
    }
    const activeSection =
        sections.find(x => x.slug === props.activeSectionSlug) ||
        getDefaultSection(sections)

    return (
        <div className="bg-green-300 h-full">
            <NextSeo
                title={`${user.firstname} - Tottem`}
                description={`${user.firstname} on Tottem - ${user.biography}`}
                canonical={`https://tottem.app/${props.profile}/${activeSection.slug}`}
                twitter={{
                    site: '@TottemApp',
                    cardType: 'summary',
                }}
                openGraph={{
                    type: 'profile',
                    profile: {
                        username: user.slug,
                    },
                    description: `${user.firstname} on Tottem - ${user.biography}`,
                    url: `https://tottem.app/${props.profile}`,
                    site_name: 'Tottem',
                    images: [
                        {
                            url: `https://tottem.app${user.pictureUrl}`,
                        },
                    ],
                }}
            />
        </div>
    )
}