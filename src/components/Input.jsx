const Input = () => {
    return (
        <section className="input-section">
            <div className="input-textfield">
                <input className="field" type="text" placeholder="Top text" />
                <input className="field" type="text" placeholder="Bottom text"/>
                <button className="button">Get a new meme image 🖼</button>
            </div>
        </section>
    )
}

export default Input