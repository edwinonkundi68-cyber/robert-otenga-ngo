const VideoGallery = () => {
    return (
        <section className="video-gallery">
            <h2>Our Impact in Videos</h2>
            <div className="videos">
                <div className="video">
                    <iframe src="https://www.youtube.com/embed/VIDEO_ID_1" title="Video 1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="video">
                    <iframe src="https://www.youtube.com/embed/VIDEO_ID_2" title="Video 2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </section>
    )
}

export default VideoGallery;
