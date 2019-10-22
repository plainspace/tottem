import styled from 'styled-components'
import { grey1000, grey900, grey600, grey500 } from '../../constants/colors'

export const PageHeader = styled.h1`
    margin: 0px;
    font-weight: 600;
    font-size: 28px;
    line-height: 56px;
    color: ${grey1000};

    @media screen and (min-width: 812px) {
        :first-line {
            line-height: 100% !important;
        }
    }

    @media screen and (max-width: 812px) {
        font-size: 20px;
        line-height: 26px;
    }
`
export const PageSubheader = styled.h3`
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;

    @media screen and (max-width: 812px) {
        font-size: 14px;
        line-height: 20px;
    }
`

export const Owner = styled.p`
    margin: 0px;
    font-size: 14px;
    cursor: pointer;
    line-height: 22px;
    color: #262626;
`

export const CreationDate = styled.p`
    margin: 0px;
    font-size: 14px;
    line-height: 22px;
    color: ${grey500};
`

export const ElementTitle = styled.a`
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    margin: 0px;
    cursor: pointer;
    text-decoration: none;
    color: ${grey900};

    @media screen and (max-width: 600px) {
        font-size: 14px;
        line-height: 20px;
    }
`

export const ElementAuthor = styled.p`
    font-size: 16px;
    margin: 16px 0px 0px 0px;
    line-height: 24px;
    /* Dark 3 */
    color: ${grey600};

    @media screen and (max-width: 600px) {
        font-size: 14px;
        line-height: 20px;
    }
`

export const CollectionTitle = styled.h3`
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
    color: ${grey900};

    @media screen and (max-width: 600px) {
        font-size: 14px;
        line-height: 20px;
    }
`