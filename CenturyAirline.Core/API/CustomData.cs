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
    using Umbraco.Web.WebApi;
    public class CustomDataController : UmbracoApiController
    {
        public JsonResult<string[]> GetData()
        {

            var flights = Umbraco.TypedContent(1073).Children.Select(x=> x.Name).ToArray();           
            

            return Json(flights, new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() });
        }
    }
}
