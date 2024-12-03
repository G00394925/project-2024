const Home = () => {
    return(
        <div style={{margin: 10, textAlign: 'center'}}>
            <br/>
            <h1>Welcome to the Music Catalogue</h1>
            <br/>
            <h4>
                This is a place where you can add and view as many albums as you desire. <br/>
                Why not start things off by <a href="/create">adding an album? </a> <br/>
                Or, if you already have things to see, you can choose to <a href="view">view your collection</a> instead! 
            </h4>
        </div>
    );
}

export default Home;