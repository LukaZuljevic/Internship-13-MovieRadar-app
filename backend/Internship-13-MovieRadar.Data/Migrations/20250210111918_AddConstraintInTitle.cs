using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Internship_13_MovieRadar.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddConstraintInTitle : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Reviews",
                keyColumn: "Id",
                keyValue: new Guid("07a46435-0f9b-42cf-8668-a13d809fa318"));

            migrationBuilder.DeleteData(
                table: "Reviews",
                keyColumn: "Id",
                keyValue: new Guid("6f6eea76-9371-472a-ad76-b0b0dddabc41"));

            migrationBuilder.DeleteData(
                table: "Reviews",
                keyColumn: "Id",
                keyValue: new Guid("82bad4d7-43e7-49b0-9095-b26bd978903e"));

            migrationBuilder.DeleteData(
                table: "Reviews",
                keyColumn: "Id",
                keyValue: new Guid("948b3255-c8f0-4255-833c-d6e38d38310b"));

            migrationBuilder.DeleteData(
                table: "Reviews",
                keyColumn: "Id",
                keyValue: new Guid("a5746b84-88e7-4133-88e1-e94a29fbba7c"));

            migrationBuilder.DeleteData(
                table: "Reviews",
                keyColumn: "Id",
                keyValue: new Guid("ccc853b5-ea8a-49f1-b394-d5f7b0103213"));

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("3d7e728d-70c4-49c9-9c11-ff30f3c51d67"));

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "Id",
                keyValue: new Guid("09438147-9395-4acd-aac1-889e7d000127"));

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "Id",
                keyValue: new Guid("5e49ad32-cb33-44a2-9c15-ba562ecd15f5"));

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "Id",
                keyValue: new Guid("95e4dad1-090f-4910-949b-81c02ebdcfcc"));

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("285a5a3e-04fa-430b-a03f-80c88bbaefb5"));

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("31365eb8-de15-4bf6-97e2-168364aa6a05"));

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("3d0abe43-2641-46c2-b2b7-503a0c1a727f"));

            migrationBuilder.InsertData(
                table: "Movies",
                columns: new[] { "Id", "CreatedAt", "Description", "Genre", "ImageUrl", "ReleaseYear", "Title", "UpdatedAt" },
                values: new object[,]
                {
                    { new Guid("569db240-3a29-4a3e-a276-b49b1c74a124"), new DateTime(2025, 2, 10, 12, 19, 17, 127, DateTimeKind.Local).AddTicks(1075), "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.", "Sci-Fi", "", 2010, "Inception", null },
                    { new Guid("a24ef457-9d04-412f-a0bd-a89f5e790ca8"), new DateTime(2025, 2, 10, 12, 19, 17, 127, DateTimeKind.Local).AddTicks(6108), "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.", "Action", "", 2008, "The Dark Knight", null },
                    { new Guid("bb9b69e3-0933-4a5c-b4de-e4f072207582"), new DateTime(2025, 2, 10, 12, 19, 17, 127, DateTimeKind.Local).AddTicks(6015), "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.", "Drama", "", 1994, "The Shawshank Redemption", null }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "CreatedAt", "Email", "FirstName", "IsAdmin", "LastName", "Password" },
                values: new object[,]
                {
                    { new Guid("39f22297-9a28-45a8-906e-b7866d1317de"), new DateTime(2025, 2, 10, 12, 19, 17, 124, DateTimeKind.Local).AddTicks(6853), "john.doe@gmail.com", "John", false, "Doe", "qErJCXpDKt4m+zyvP95FuukV3gEGrD1so8mCtoZtMcE=" },
                    { new Guid("744d3d7c-6cec-4dbb-9173-74abed06db44"), new DateTime(2025, 2, 10, 12, 19, 17, 124, DateTimeKind.Local).AddTicks(7033), "mark.wilson@gmail.com", "Mark", false, "Wilson", "qFYB54kbXvV24+kUz/cJy2WVfl9ifGPtY5t3plLC1YY=" },
                    { new Guid("ab00e0ac-3865-44bb-8e27-b109ebfa5346"), new DateTime(2025, 2, 10, 12, 19, 17, 113, DateTimeKind.Local).AddTicks(9464), "admin@movieradar.com", "Admin", true, "User", "oQnjaUetVt4dyhzEnw74rJrZp7GqDfQfs8TLc8H/Aeo=" },
                    { new Guid("c7da352e-9fc4-46ef-8c30-dfb39fd11473"), new DateTime(2025, 2, 10, 12, 19, 17, 124, DateTimeKind.Local).AddTicks(7021), "jane.smith@gmail.com", "Jane", false, "Smith", "qFYB54kbXvV24+kUz/cJy2WVfl9ifGPtY5t3plLC1YY=" }
                });

            migrationBuilder.InsertData(
                table: "Reviews",
                columns: new[] { "Id", "Content", "CreatedAt", "MovieId", "Rating", "UserId" },
                values: new object[,]
                {
                    { new Guid("309ca33f-c2a2-4174-ac28-8ed603fac02c"), "One of the greatest movies ever made. The story is deeply moving.", new DateTime(2025, 2, 10, 12, 19, 17, 128, DateTimeKind.Local).AddTicks(4288), new Guid("bb9b69e3-0933-4a5c-b4de-e4f072207582"), 5, new Guid("c7da352e-9fc4-46ef-8c30-dfb39fd11473") },
                    { new Guid("6259b7c5-0739-42e5-9de1-c888bc096895"), "A timeless classic. Morgan Freeman's performance is outstanding.", new DateTime(2025, 2, 10, 12, 19, 17, 128, DateTimeKind.Local).AddTicks(3914), new Guid("bb9b69e3-0933-4a5c-b4de-e4f072207582"), 5, new Guid("39f22297-9a28-45a8-906e-b7866d1317de") },
                    { new Guid("76a681d8-906d-4f02-a719-ed58ba131c4a"), "Brilliant direction by Nolan. The pacing and action scenes are incredible.", new DateTime(2025, 2, 10, 12, 19, 17, 128, DateTimeKind.Local).AddTicks(4312), new Guid("a24ef457-9d04-412f-a0bd-a89f5e790ca8"), 4, new Guid("744d3d7c-6cec-4dbb-9173-74abed06db44") },
                    { new Guid("c4b0e4ca-36ba-4dec-bd85-75db10ad0bbb"), "Heath Ledger's Joker is unforgettable. A perfect superhero movie.", new DateTime(2025, 2, 10, 12, 19, 17, 128, DateTimeKind.Local).AddTicks(4302), new Guid("a24ef457-9d04-412f-a0bd-a89f5e790ca8"), 5, new Guid("c7da352e-9fc4-46ef-8c30-dfb39fd11473") },
                    { new Guid("d65d3c55-811d-4404-9af0-31d973b7d3a5"), "Complex plot but very entertaining. The visual effects are stunning.", new DateTime(2025, 2, 10, 12, 19, 17, 127, DateTimeKind.Local).AddTicks(9593), new Guid("569db240-3a29-4a3e-a276-b49b1c74a124"), 4, new Guid("39f22297-9a28-45a8-906e-b7866d1317de") },
                    { new Guid("f073d929-2f28-45a4-b564-5dd25f0d0bf8"), "The ending left me questioning everything. Great soundtrack too.", new DateTime(2025, 2, 10, 12, 19, 17, 128, DateTimeKind.Local).AddTicks(4320), new Guid("569db240-3a29-4a3e-a276-b49b1c74a124"), 4, new Guid("744d3d7c-6cec-4dbb-9173-74abed06db44") }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Movies_Title",
                table: "Movies",
                column: "Title",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Movies_Title",
                table: "Movies");

            migrationBuilder.DeleteData(
                table: "Reviews",
                keyColumn: "Id",
                keyValue: new Guid("309ca33f-c2a2-4174-ac28-8ed603fac02c"));

            migrationBuilder.DeleteData(
                table: "Reviews",
                keyColumn: "Id",
                keyValue: new Guid("6259b7c5-0739-42e5-9de1-c888bc096895"));

            migrationBuilder.DeleteData(
                table: "Reviews",
                keyColumn: "Id",
                keyValue: new Guid("76a681d8-906d-4f02-a719-ed58ba131c4a"));

            migrationBuilder.DeleteData(
                table: "Reviews",
                keyColumn: "Id",
                keyValue: new Guid("c4b0e4ca-36ba-4dec-bd85-75db10ad0bbb"));

            migrationBuilder.DeleteData(
                table: "Reviews",
                keyColumn: "Id",
                keyValue: new Guid("d65d3c55-811d-4404-9af0-31d973b7d3a5"));

            migrationBuilder.DeleteData(
                table: "Reviews",
                keyColumn: "Id",
                keyValue: new Guid("f073d929-2f28-45a4-b564-5dd25f0d0bf8"));

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("ab00e0ac-3865-44bb-8e27-b109ebfa5346"));

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "Id",
                keyValue: new Guid("569db240-3a29-4a3e-a276-b49b1c74a124"));

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "Id",
                keyValue: new Guid("a24ef457-9d04-412f-a0bd-a89f5e790ca8"));

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "Id",
                keyValue: new Guid("bb9b69e3-0933-4a5c-b4de-e4f072207582"));

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("39f22297-9a28-45a8-906e-b7866d1317de"));

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("744d3d7c-6cec-4dbb-9173-74abed06db44"));

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("c7da352e-9fc4-46ef-8c30-dfb39fd11473"));

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
        }
    }
}
