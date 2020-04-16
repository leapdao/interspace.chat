import React from "react"
import styled from "styled-components"

const Container = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	background: whitesmoke;
`

const ParagraphStyled = styled.div`
	display: grid;
	grid-template-rows: auto auto auto;
	max-width: 80%;
	line-height: 1.5rem;
	margin: 0 auto;
	padding: 1rem;
	justify-items: space-between;
	grid-gap: 1rem;
`

const LinkStyled = styled.a`
    color: red;
}`

function LivestreamLinksInstance() {
	return (
		<Container>
			<p>
				Direct links to the youtube playlists of NONCON2020 conference tracks:
			</p>
			<ParagraphStyled>
				<LinkStyled
					href="https://www.youtube.com/playlist?list=PLp4Qsobvo_Ju4zgf3fai8Fc5apwEtNVGH"
					target="_blank"
					rel="noopener noreferrer">
					Playlist for parallel-society
				</LinkStyled>
				<LinkStyled
					href="https://www.youtube.com/playlist?list=PLp4Qsobvo_Jv561ib0n2PkVQMbvXWr96e"
					target="_blank"
					rel="noopener noreferrer">
					Playlist for cryptoeconomics-lab
				</LinkStyled>
				<LinkStyled
					href="https://www.youtube.com/playlist?list=PLp4Qsobvo_Jsl_Xznv7tYLZYmKIKF9Cxv"
					target="_blank"
					rel="noopener noreferrer">
					Playlist for metatrack
				</LinkStyled>
			</ParagraphStyled>
		</Container>
	)
}

export default LivestreamLinksInstance
