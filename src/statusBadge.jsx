function StatusBadge({ isOpenToWork }) {
    return (
        <span className={isOpenToWork ? "badge-green" : "badge-gray"}>
            {isOpenToWork ? "Open to work" : "Busy learning"}
        </span>
    );
}

export default StatusBadge;