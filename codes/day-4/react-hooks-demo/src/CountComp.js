const CountComp = ({ value }) => {
    console.log('[CountComp] rendered')
    return (
        <div>
            Count:&nbsp;
            {value}
        </div>
    )
}
export default CountComp;