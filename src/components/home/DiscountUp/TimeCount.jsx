const TimeCount = () => {
  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col p-2 bg-white border border-fh-gray-50 rounded-box ">
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": 15 }} aria-live="polite" aria-label={54}>
            15
          </span>
        </span>
        days
      </div>
      <div className="flex flex-col p-2 bg-white border border-fh-gray-50 rounded-box ">
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": 10 }} aria-live="polite" aria-label={25}>
            10
          </span>
        </span>
        hours
      </div>
      <div className="flex flex-col p-2 bg-white border border-fh-gray-50 rounded-box ">
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": 24 }} aria-live="polite" aria-label={25}>
            24
          </span>
        </span>
        min
      </div>
      <div className="flex flex-col p-2 bg-white border border-fh-gray-50 rounded-box ">
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": 59 }} aria-live="polite" aria-label={25}>
            59
          </span>
        </span>
        second
      </div>
    </div>
  );
};

export default TimeCount;
