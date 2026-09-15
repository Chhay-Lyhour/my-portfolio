function StatusBadge({ isOpenToWork }) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-sm font-medium text-white ${
        isOpenToWork ? "bg-indigo-600" : "bg-gray-500"
      }`}
    >
      {isOpenToWork ? "Open to work" : "Busy learning"}
    </span>
  );
}

export default StatusBadge;
