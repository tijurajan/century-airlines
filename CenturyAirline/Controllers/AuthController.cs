using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using System.Web.Security;
using Umbraco.Web.Mvc;
using CenturyAirline.Models;
using Umbraco.Core;
using Umbraco.Core.Models;
using Umbraco.Core.Services;
using Umbraco.Core.Persistence.Querying;

namespace CenturyAirline.Controllers
{
    public class AuthController : SurfaceController
    {
        public ActionResult RenderLogin()
        {
            return PartialView("_Login", new LoginModel());
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult SubmitLogin(LoginModel model, string returnUrl)
        {
            if (ModelState.IsValid)
            {
                if (Membership.ValidateUser(model.Username, model.Password))
                {
                    FormsAuthentication.SetAuthCookie(model.Username, false);
                    UrlHelper myHelper = new UrlHelper(HttpContext.Request.RequestContext);
                    if (myHelper.IsLocalUrl(returnUrl))
                    {
                        
                       
                        return Redirect(returnUrl);
                    }
                    else
                    {
                        var memberService = ApplicationContext.Current.Services.MemberService;
                        var admins = memberService.FindMembersInRole("Admin", model.Username, StringPropertyMatchType.Exact); // add logic to redirect to admin dashboard
                        var user = Members.GetByUsername(model.Username);
                        return Redirect("/");
                    }
                }
                else
                {
                    ModelState.AddModelError("", "The username or password provided is incorrect.");
                }
            }
            return CurrentUmbracoPage();
        }

        public ActionResult RenderLogout()
        {
            return PartialView("_Logout", null);
        }

        public ActionResult SubmitLogout()
        {
            TempData.Clear();
            Session.Clear();
            FormsAuthentication.SignOut();
            return RedirectToCurrentUmbracoPage();
        }
    }
}