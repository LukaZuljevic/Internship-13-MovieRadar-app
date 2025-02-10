using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Internship_13_MovieRadar.Data.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Movies",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Title = table.Column<string>(type: "text", nullable: false),
                    Description = table.Column<string>(type: "text", nullable: false),
                    Genre = table.Column<string>(type: "text", nullable: false),
                    ReleaseYear = table.Column<int>(type: "integer", nullable: false),
                    ImageUrl = table.Column<string>(type: "text", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "timestamp without time zone", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Movies", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Email = table.Column<string>(type: "text", nullable: false),
                    Password = table.Column<string>(type: "text", nullable: false),
                    FirstName = table.Column<string>(type: "text", nullable: false),
                    LastName = table.Column<string>(type: "text", nullable: false),
                    IsAdmin = table.Column<bool>(type: "boolean", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "timestamp without time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Reviews",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    UserId = table.Column<Guid>(type: "uuid", nullable: false),
                    MovieId = table.Column<Guid>(type: "uuid", nullable: false),
                    Content = table.Column<string>(type: "text", nullable: false),
                    Rating = table.Column<int>(type: "integer", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "timestamp without time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reviews", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Reviews_Movies_MovieId",
                        column: x => x.MovieId,
                        principalTable: "Movies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Reviews_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Movies",
                columns: new[] { "Id", "CreatedAt", "Description", "Genre", "ImageUrl", "ReleaseYear", "Title", "UpdatedAt" },
                values: new object[,]
                {
                    { new Guid("09438147-9395-4acd-aac1-889e7d000127"), new DateTime(2025, 2, 9, 23, 29, 25, 125, DateTimeKind.Local).AddTicks(9897), "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.", "Drama", "", 1994, "The Shawshank Redemption", null },
                    { new Guid("5e49ad32-cb33-44a2-9c15-ba562ecd15f5"), new DateTime(2025, 2, 9, 23, 29, 25, 125, DateTimeKind.Local).AddTicks(5818), "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.", "Sci-Fi", "", 2010, "Inception", null },
                    { new Guid("95e4dad1-090f-4910-949b-81c02ebdcfcc"), new DateTime(2025, 2, 9, 23, 29, 25, 126, DateTimeKind.Local).AddTicks(116), "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.", "Action", "", 2008, "The Dark Knight", null }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "CreatedAt", "Email", "FirstName", "IsAdmin", "LastName", "Password" },
                values: new object[,]
                {
                    { new Guid("285a5a3e-04fa-430b-a03f-80c88bbaefb5"), new DateTime(2025, 2, 9, 23, 29, 25, 123, DateTimeKind.Local).AddTicks(2339), "john.doe@gmail.com", "John", false, "Doe", "qErJCXpDKt4m+zyvP95FuukV3gEGrD1so8mCtoZtMcE=" },
                    { new Guid("31365eb8-de15-4bf6-97e2-168364aa6a05"), new DateTime(2025, 2, 9, 23, 29, 25, 123, DateTimeKind.Local).AddTicks(2589), "jane.smith@gmail.com", "Jane", false, "Smith", "qFYB54kbXvV24+kUz/cJy2WVfl9ifGPtY5t3plLC1YY=" },
                    { new Guid("3d0abe43-2641-46c2-b2b7-503a0c1a727f"), new DateTime(2025, 2, 9, 23, 29, 25, 123, DateTimeKind.Local).AddTicks(2602), "mark.wilson@gmail.com", "Mark", false, "Wilson", "qFYB54kbXvV24+kUz/cJy2WVfl9ifGPtY5t3plLC1YY=" },
                    { new Guid("3d7e728d-70c4-49c9-9c11-ff30f3c51d67"), new DateTime(2025, 2, 9, 23, 29, 25, 110, DateTimeKind.Local).AddTicks(8134), "admin@movieradar.com", "Admin", true, "User", "oQnjaUetVt4dyhzEnw74rJrZp7GqDfQfs8TLc8H/Aeo=" }
                });

            migrationBuilder.InsertData(
                table: "Reviews",
                columns: new[] { "Id", "Content", "CreatedAt", "MovieId", "Rating", "UserId" },
                values: new object[,]
                {
                    { new Guid("07a46435-0f9b-42cf-8668-a13d809fa318"), "Complex plot but very entertaining. The visual effects are stunning.", new DateTime(2025, 2, 9, 23, 29, 25, 126, DateTimeKind.Local).AddTicks(2279), new Guid("5e49ad32-cb33-44a2-9c15-ba562ecd15f5"), 4, new Guid("285a5a3e-04fa-430b-a03f-80c88bbaefb5") },
                    { new Guid("6f6eea76-9371-472a-ad76-b0b0dddabc41"), "Heath Ledger's Joker is unforgettable. A perfect superhero movie.", new DateTime(2025, 2, 9, 23, 29, 25, 126, DateTimeKind.Local).AddTicks(6529), new Guid("95e4dad1-090f-4910-949b-81c02ebdcfcc"), 5, new Guid("31365eb8-de15-4bf6-97e2-168364aa6a05") },
                    { new Guid("82bad4d7-43e7-49b0-9095-b26bd978903e"), "Brilliant direction by Nolan. The pacing and action scenes are incredible.", new DateTime(2025, 2, 9, 23, 29, 25, 126, DateTimeKind.Local).AddTicks(6537), new Guid("95e4dad1-090f-4910-949b-81c02ebdcfcc"), 4, new Guid("3d0abe43-2641-46c2-b2b7-503a0c1a727f") },
                    { new Guid("948b3255-c8f0-4255-833c-d6e38d38310b"), "A timeless classic. Morgan Freeman's performance is outstanding.", new DateTime(2025, 2, 9, 23, 29, 25, 126, DateTimeKind.Local).AddTicks(6469), new Guid("09438147-9395-4acd-aac1-889e7d000127"), 5, new Guid("285a5a3e-04fa-430b-a03f-80c88bbaefb5") },
                    { new Guid("a5746b84-88e7-4133-88e1-e94a29fbba7c"), "One of the greatest movies ever made. The story is deeply moving.", new DateTime(2025, 2, 9, 23, 29, 25, 126, DateTimeKind.Local).AddTicks(6521), new Guid("09438147-9395-4acd-aac1-889e7d000127"), 5, new Guid("31365eb8-de15-4bf6-97e2-168364aa6a05") },
                    { new Guid("ccc853b5-ea8a-49f1-b394-d5f7b0103213"), "The ending left me questioning everything. Great soundtrack too.", new DateTime(2025, 2, 9, 23, 29, 25, 126, DateTimeKind.Local).AddTicks(6544), new Guid("5e49ad32-cb33-44a2-9c15-ba562ecd15f5"), 4, new Guid("3d0abe43-2641-46c2-b2b7-503a0c1a727f") }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Reviews_MovieId",
                table: "Reviews",
                column: "MovieId");

            migrationBuilder.CreateIndex(
                name: "IX_Reviews_UserId_MovieId",
                table: "Reviews",
                columns: new[] { "UserId", "MovieId" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Users_Email",
                table: "Users",
                column: "Email",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Reviews");

            migrationBuilder.DropTable(
                name: "Movies");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
