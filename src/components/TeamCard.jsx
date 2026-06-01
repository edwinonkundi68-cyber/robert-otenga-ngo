const TeamCard = ({ name, position, bio }) => {
    return (
        <div className="team-card">
            <h3>{name}</h3>
            <p className="position">{position}</p>
            <p className="bio">{bio}</p>
        </div>
    )
}

export default TeamCard;
    