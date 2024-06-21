using CountryCrush.Api.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using CountryCrush.Api;
using CountryCrush.Api.Models;

//using Wordle.Api.Services;

var AllOrigins = "AllOrigins";

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection") ?? throw new InvalidOperationException("Connection string 'DefaultConnection' not found.");
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(connectionString));
//builder.Services.AddDatabaseDeveloperPageExceptionFilter();
//test for workflow pt 2 can delete

// Add services to the container.
builder.Services.AddCors(options =>
{
options.AddPolicy(name: AllOrigins, policy =>
{
policy.WithOrigins("*");
policy.AllowAnyMethod();
policy.AllowAnyHeader();
});
});

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//builder.Services.AddScoped<WordOfTheDayService>();
//builder.Services.AddScoped<GameService>();

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
db.Database.Migrate();
//await Seeder.Seed(db);
//ENSURE CREATED
}

// Configure the HTTP request pipeline.

app.UseSwagger();

app.UseSwaggerUI();

app.UseHttpsRedirection();

app.UseCors(AllOrigins);

app.UseAuthorization();

app.MapControllers();

app.Run();

public partial class Program { }