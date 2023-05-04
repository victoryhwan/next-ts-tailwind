import Head from 'next/head';

type MetaInfoProps = {
    title:string
    description:string
    image?:string
}

const MetaHead = ({title, description, image}:MetaInfoProps)=>{

    let _title = title === '' ? 'JustinTory' : 'JustinTory - '+title

    return (
        <Head>
            <meta name="robots" content="follow, index" />
            <title>{_title}</title>
            <meta name="description" content={description} />
            <meta property="og:site_name" content={_title} />
            <meta property="og:description" content={description} />
            <meta property="og:title" content={_title} />
            <meta property="og:image" content={image} />
            {/* <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@yourname" />
            <meta name="twitter:title" content={meta.title} />
            <meta name="twitter:description" content={meta.description} />
            <meta name="twitter:image" content={meta.image} /> */}
        </Head>
    )
}

export default MetaHead