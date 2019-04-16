using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace CenturyAirline.Core.API
{
    using CenturyAirline.Core.DocumentTypes;
    using Newtonsoft.Json;
    using Newtonsoft.Json.Serialization;   
    using System.Web.Http.Results;
    using Umbraco.Core.Models;
    using Umbraco.Web.WebApi;
    using System.Net.Http;
    using System.Web.Http;
    using Newtonsoft.Json.Linq;
    using CenturyAirline.Core.Models;

    public class FlightsDataController : UmbracoApiController
    {

        public JsonResult<List<object>> GetFlights()
        {

            var flights = Umbraco.TypedContent(1073).Children.Select(x => x.Name).ToArray();
            var flightList = Umbraco.TypedContent(1073).Children;
            List<object> response = new List<object>();
            foreach (var item in flightList)
            {
                response.Add(new { id= item.Id, name = item.Name, number = item.GetProperty("flightNumber").Value.ToString(), capacity = item.GetProperty("passengerCapacity").Value.ToString(), departurecity = item.GetProperty("departureCity").Value.ToString()
                , starttime = umbraco.library.FormatDateTime(item.GetProperty("startTime").Value.ToString(), "MMMM d, yyyy H:mm")
                , endtime = umbraco.library.FormatDateTime(item.GetProperty("endTime").Value.ToString(), "MMMM d, yyyy H:mm")
                , arrivalcity = item.GetProperty("arrivalCity").Value.ToString()
                , notes = item.GetProperty("notes").Value.ToString()
                });
            }
            return Json(response);
            //return Json(flights, new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() });
        }
       
        [HttpPost]
        public void CreateFlight([System.Web.Http.FromBody]FlightModel flight)
        {
            var p = Request.Content.ReadAsAsync<JObject>();
        }
    }
}
