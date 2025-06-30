function MoodDisplay({value}) {
    const mood = {
        happy: "keep smiling!😊 ",
        sad: "It's okayy to be sad sometimes.🙂 ",
        excite: "Lets celebrate!🤩 ",
        angry:  "Take a deep breath.😌",
    };
    

    return (
        <div className="box">
            {value ? <p>{mood[value]}</p> : <p>Click on a button!</p>}
            
        </div>
    );
}
export default MoodDisplay;