public class TextMessage : MessageModel<string>
{
    public TextMessage(string content, string ticketId, string senderId)
      : base(content, ticketId, senderId, "text", setLength(content))
    {
    }

    private static int setLength(string content)
    {
        int length = content.Length;
        return length;
    }
}
