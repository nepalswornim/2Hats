
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;

using System.Web.Http;
using System.Web.Http.Description;

using _2HatsTask.Models;
using NLog;
using NLog.Targets;
using NLog.Config;
using System;

namespace _2HatsTask.Controllers
{
    public class DirectoriesController : ApiController
    {
        private Entities db = new Entities();


        // GET: api/Directories
        public IQueryable<Directory> GetDirectories()
        {
            Log l = new Log();
            l.Date = DateTime.Now;
            l.Directory = "All";
            l.Field = "All";
            l.From = "";
            l.To = "";
            db.Logs.Add(l);
            db.SaveChanges();
            return db.Directories;
            
        }

        // GET: api/Directories/5
        [ResponseType(typeof(Directory))]
        public IHttpActionResult GetDirectory(int id)
        {
            Directory directory = db.Directories.Find(id);
            if (directory == null)
            {
                return NotFound();
            }
            Log l = new Log();
            l.Date = DateTime.Now;
            l.Directory = directory.CompanyName;
            l.Field = "";
            l.From = "";
            l.To = "";
            db.Logs.Add(l);
            db.SaveChanges();

            return Ok(directory);
        }

        [System.Web.Http.Route("api/Directories/UpdateDetails")]
        [System.Web.Http.HttpPut]
        public int UpdateEmployee([FromBody]Directory obj)
        {









            db.Entry(obj).State = EntityState.Modified;
            try
            {
                Directory d = db.Directories.Find(obj.ID);
                Log l = new Log();
                l.Date = DateTime.Now;
                l.Directory = d.CompanyName;
                l.Field = "All";
                l.From = d.CompanyName + d.Level + d.Suite;
                l.To = obj.CompanyName + obj.Level + obj.Suite;
                db.Logs.Add(l);
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DirectoryExists(obj.ID))
                {
                    return 0;
                }
                else
                {
                    throw;
                }
            }

       
            return 1;
        }
        //[HttpPost]
        //public void PutDirectory( Directory directory)
        //{
        //    //if (!ModelState.IsValid)
        //    //{
        //    //    return BadRequest(ModelState);
        //    //}

        //    //if (id != directory.ID)
        //    //{
        //    //    return BadRequest();
        //    //}

        //    db.Entry(directory).State = EntityState.Modified;

     
        //    //return StatusCode(HttpStatusCode.NoContent);
        //}

        // POST: api/Directories
        [ResponseType(typeof(Directory))]
        public IHttpActionResult PostDirectory(Directory directory)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Log l = new Log();
            l.Date = DateTime.Now;
            l.Directory = directory.CompanyName;
            l.Field = "All";
            l.From = directory.CompanyName + directory.Level + directory.Suite;
            l.To = "";
            db.Logs.Add(l);
            db.SaveChanges();

            db.Directories.Add(directory);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = directory.ID }, directory);
        }

        // DELETE: api/Directories/5
        [ResponseType(typeof(Directory))]
        public IHttpActionResult DeleteDirectory(int id)
        {
            Directory d = db.Directories.Find(id);
            Log l = new Log();
            l.Date = DateTime.Now;
            l.Directory = d.CompanyName;
            l.Field = "All";
            l.From = d.CompanyName + d.Level + d.Suite;
            l.To = "Deleted";
            db.Logs.Add(l);
            db.SaveChanges();
            Directory directory = db.Directories.Find(id);
            if (directory == null)
            {
                return NotFound();
            }

            db.Directories.Remove(directory);
            db.SaveChanges();

            return Ok(directory);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool DirectoryExists(int id)
        {
            return db.Directories.Count(e => e.ID == id) > 0;
        }
    }
    class Example
    {
        static void Main(string[] args)
        {
            // Step 1. Create configuration object 
            var config = new LoggingConfiguration();

            // Step 2. Create targets
            var consoleTarget = new ColoredConsoleTarget("target1")
            {
                Layout = @"${date:format=HH\:mm\:ss} ${level} ${message} ${exception}"
            };
            config.AddTarget(consoleTarget);

            var fileTarget = new FileTarget("target2")
            {
                FileName = "${basedir}/file.txt",
                Layout = "${longdate} ${level} ${message}  ${exception}"
            };
            config.AddTarget(fileTarget);


            // Step 3. Define rules
            config.AddRuleForOneLevel(LogLevel.Error, fileTarget); // only errors to file
            config.AddRuleForAllLevels(consoleTarget); // all to console

            // Step 4. Activate the configuration
            LogManager.Configuration = config;

            // Example usage
            Logger logger = LogManager.GetLogger("Example");
            logger.Trace("trace log message");
            logger.Debug("debug log message");
            logger.Info("info log message");
            logger.Warn("warn log message");
            logger.Error("error log message");
            logger.Fatal("fatal log message");

            //Example of logging exceptions

            try
            {

            }
            catch (Exception ex)
            {
                logger.Error(ex, "ow noos!");
                throw;
            }
        }
    }
}