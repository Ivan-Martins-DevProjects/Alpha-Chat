using StackExchange.Redis;
using System.Text.Json;

public class RedisService<TMessage> : IRedisService<TMessage>
{
    private readonly IConnectionMultiplexer _connection;
    private readonly ISubscriber _subscriber;

    public RedisService(IConnectionMultiplexer connection)
    {
        _connection = connection;
        _subscriber = connection.GetSubscriber();
    }

    public async Task PublishAsync(string channel, TMessage message)
    {
        var content = JsonSerializer.Serialize(message);
        await _subscriber.PublishAsync(
            RedisChannel.Literal(channel),
            content);
    }

    public async Task SubscribeAsync(string channel, Func<TMessage, Task> handler)
    {
        await _subscriber.SubscribeAsync(
            RedisChannel.Literal(channel),
            async (_, value) =>
            {
                var message = JsonSerializer.Deserialize<TMessage>(
                    value!
                );

                if (message is not null)
                {
                    await handler(message);
                }
            }
            );
    }
}
