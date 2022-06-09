import GradientLayout from "../../components/gradientLayout"
import { validateToken } from "../../lib/auth"
import prisma from "../../lib/prisma"

const getBGColor = id => {
    const colors = [
        'red',
        'green',
        'blue',
        'yellow',
        'orange',
        'purple',
        'pink',
        'gray',
        'teal',
    ]

    return colors[id -1] || colors[Math.floor(Math.random() * colors.length)]
}

const Playlist = ({ playlist }) => {
    const color = getBGColor(playlist.id)
    return (
        <GradientLayout 
        color={color}
        roundImage={false}
        title={playlist.name}
        subtitle="Playlist"
        description={`${playlist.songs.length} songs`}
        image={`https://picsum.photos/400?random=${playlist.id}`}
        >
            <div>df</div>
        </GradientLayout>
    )
}

export const getServerSideProps = async ({ query, req }) => {
    const { id } = validateToken(req.cookies.SPOTIFY_ACCESS_TOKEN)
    const [playlist] = await prisma.playlist.findMany({
        where: {
            id: +query.id,
            userId: id,
        },
        include: {
            songs: {
                include: {
                    artist: {
                        select: {
                            name: true,
                            id: true,
                        },
                    },
                },
            },
        },
    })

    return {
        props: { playlist },
    }
}

export default Playlist