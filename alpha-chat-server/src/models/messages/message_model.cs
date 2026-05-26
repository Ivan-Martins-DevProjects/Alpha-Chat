public class MessageModel<T> : IMessage<T>
{
    public T Content { get; set; }
    public string TicketId { get; set; }
    public string SenderId { get; set; }
    public string Type { get; set; }
    public int Length { get; set; }

    public MessageModel(
        T content,
        string ticketId,
        string senderId,
        string type,
        int length
        )
    {
        Content = content;
        TicketId = ticketId;
        SenderId = senderId;
        Type = type;
        Length = length;
    }
}
