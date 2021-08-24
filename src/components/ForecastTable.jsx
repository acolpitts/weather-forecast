import { useSelector } from "react-redux";
import { useState } from "react";

const ForecastTable = () => {
  const { forecast } = useSelector((state) => state.weather);
  const [currentDate, setCurrentDate] = useState(null);

  const getListByDate = () => {
    if (!currentDate) {
      setCurrentDate(getEarliestDate());
    }

    const dates = forecast.list.filter(
      (element) => element.dt_txt.substr(0, 10) === currentDate
    );

    return dates.map((data, idx) => {
      return (
        <tr key={idx}>
          <td className="px-3 py-2 whitespace-nowrap">
            <div className="flex items-center">
              <div className="text-sm text-gray-900">{data.dt_txt}</div>
            </div>
          </td>

          <td className="px-3 py-2 whitespace-nowrap">
            <div className="flex items-center">
              <div className="text-sm text-gray-900">
                {Math.round(data.main.temp - 273)} ºC
              </div>
            </div>
          </td>

          <td className="px-3 py-2 whitespace-nowrap">
            <div className="flex items-center">
              <div className="text-sm text-gray-900">
                {Math.round(data.main.temp_min - 273)} ºC
              </div>
            </div>
          </td>

          <td className="px-3 py-2 whitespace-nowrap">
            <div className="flex items-center">
              <div className="text-sm text-gray-900">
                {Math.round(data.main.temp_max - 273)} ºC
              </div>
            </div>
          </td>

          <td className="px-3 py-2 whitespace-nowrap">
            <div className="flex items-center">
              <div className="text-sm text-gray-900">{data.wind.speed} m/s</div>
            </div>
          </td>

          <td className="px-3 py-2 whitespace-nowrap">
            <div className="flex items-center">
              <div className="text-sm text-gray-900">
                {data.weather[0].description}
              </div>
            </div>
          </td>
        </tr>
      );
    });
  };

  const getLabel = (item) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = parseInt(item.substr(5, 7));
    const day = parseInt(item.substr(8, 10));

    return `${months[month - 1]} ${day}`;
  };

  const getEarliestDate = () => {
    const orderedDates = forecast.list.sort(function (a, b) {
      return Date.parse(a) > Date.parse(b);
    });
    return orderedDates[0].dt_txt.substr(0, 10);
  };

  const getDateFilters = () => {
    const filters = [
      ...new Set(forecast.list.map((item) => item.dt_txt.substr(0, 10))),
    ];
    return filters.map((item, idx) => {
      return (
        <button
          key={idx}
          type="button"
          onClick={() => {
            setCurrentDate(item.substr(0, 10));
          }}
          className="px-3 py-1 bg-blue-500 text-white text-small m-1"
        >
          {getLabel(item)}
        </button>
      );
    });
  };

  return (
    <>
      {forecast?.list && forecast?.list.length > 0 && (
        <>
          <div className="flex flex-col">
            <div className="my-5 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Temp
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Min Temp
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Max Temp
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Wind
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {getListByDate()}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div>{getDateFilters()}</div>
        </>
      )}
    </>
  );
};

export default ForecastTable;
