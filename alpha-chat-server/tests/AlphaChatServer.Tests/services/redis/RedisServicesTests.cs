using System.Text.Json;
using Moq;
using StackExchange.Redis;
using Xunit;

public class RedisServiceTests
{
    [Fact]
    public async Task PublishAsync_ShouldPublishMessage()
    {
        var subscriberMock =
            new Mock<ISubscriber>();

        var redisMock =
            new Mock<IConnectionMultiplexer>();

        redisMock
            .Setup(x =>
                x.GetSubscriber(It.IsAny<object>())
            )
            .Returns(subscriberMock.Object);

        var service =
            new RedisService<TextMessage>(
                redisMock.Object
            );

        var message =
            new TextMessage(
                content: "Olá, tudo bem?",
                ticketId: "123",
                senderId: "321"
            );

        await service.PublishAsync(
            "chat",
            message
        );

        subscriberMock.Verify(
            x => x.PublishAsync(
                RedisChannel.Literal("chat"),
                It.Is<RedisValue>(
                    value => ValidateMessage(value)
                ),
                CommandFlags.None
            ),
            Times.Once
        );
    }

    private static bool ValidateMessage(
        RedisValue value
    )
    {
        var json = value.ToString();

        var deserializedMessage =
            JsonSerializer.Deserialize<TextMessage>(
                json!
            );

        return
            deserializedMessage != null
            && deserializedMessage.Content
                == "Olá, tudo bem?"
            && deserializedMessage.TicketId
                == "123"
            && deserializedMessage.SenderId
                == "321";
    }
}
