import * as React from "react";

interface Props {
  restaurant: Restaurant;
  showSingleDay: boolean;
  weekDayToday: string | null;
}

const renderDay = ({ wday, items }: RestaurantDayMenu) => (
  <React.Fragment key={wday}>
    <h4 className="f6 fw6">{wday}</h4>
    <div key={wday} className="lh-title">
      {items.map(({ name, title }) => (
        <React.Fragment key={name}>
          <div className="f6 b">{title}</div>
          <div className="ml0 mb2">{name}</div>
        </React.Fragment>
      ))}
    </div>
  </React.Fragment>
);

export const Restaurant: React.SFC<Props> = ({
  restaurant: { days, name, url },
  showSingleDay,
  weekDayToday
}) => {
  const weekDayToRender =
    showSingleDay &&
    days.find(({ wday }) => wday.toLowerCase() === weekDayToday);

  return (
    <div>
      <a
        href={url}
        rel="noopener noreferrer"
        target="_blank"
        className="link underline black hover-blue"
      >
        <h2>{name}</h2>
      </a>
      {weekDayToRender ? renderDay(weekDayToRender) : days.map(renderDay)}
    </div>
  );
};