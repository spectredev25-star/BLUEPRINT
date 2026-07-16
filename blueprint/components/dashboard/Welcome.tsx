export default function Welcome(){
    return(
        <section className="welcome-card absolute top-32 p-6 right-0">
            <div className="grid grid-cols-2 gap-8">
                <div>
                <h2>Hello, John Doe!!!</h2>
                <p>Your profile is <span className="percent-complete">100%</span> complete.</p>
                <p>Wait a little while we recommend a scholarship for you base on your details.</p>
                </div>
                <div>
                <div className="stats-card grid grid-cols-2">
                    <div>
                        <h3>Matches</h3>
                        <p>---</p>
                    </div>
                    <div>
                        <h3>Applications</h3>
                        <p>-----</p>
                    </div>
                </div>
                      <div className="stats-card grid grid-cols-2">
                    <div>
                        <h3>Deadlines</h3>
                        <p>---</p>
                    </div>
                    <div>
                        <h3>Review</h3>
                        <p>---</p>
                    </div>
                </div>
            </div>
            </div>

        </section>
    )
}