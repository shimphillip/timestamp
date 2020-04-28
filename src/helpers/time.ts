interface UnixUTCProps {
  unix: number;
  utc: string;
}

const getUnixAndUTC = (date: Date): UnixUTCProps => ({
  unix: date.getTime(),
  utc: date.toUTCString(),
});

interface GetTimeStampProps {
  isUnix?: boolean;
  dateString?: string;
}

export const getTimeStamps = ({
  isUnix = false,
  dateString,
}: GetTimeStampProps): UnixUTCProps => {
  if (!dateString) {
    return getUnixAndUTC(new Date());
  }

  if (isUnix) {
    return getUnixAndUTC(new Date(Number(dateString)));
  }
  return getUnixAndUTC(new Date(dateString));
};
