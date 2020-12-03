const NameComp = ({ name, changeName }) => {
    return (
        <div>
            Name:&nbsp;<input type='text' value={name} onChange={changeName} />
        </div>
    )
}
export default NameComp;